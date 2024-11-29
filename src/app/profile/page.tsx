import { useState, useEffect } from "react";
import styles from "../../styles/Profile.module.css";

interface ProfileData {
  image: string;
  username: string;
  phoneNumber: string;
  gender: string;
  religion: string;
  maritalStatus: string;
  educationLevel: string;
  workExperience: string;
  aboutMe: string;
}

const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await fetch("/api/profile");
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data: ProfileData = await res.json(); // Explicitly type the API response
        setProfileData(data);
      } catch (err) {
        console.error("Failed to fetch profile data:", err);
        setError("Unable to load profile data.");
      }
    };

    fetchProfileData();
  }, []);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!profileData) {
    return <div className={styles.loader}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Profile</h1>
      <div className={styles.profileCard}>
        <img
          src={profileData.image || "/default-profile.png"}
          alt="Profile"
          className={styles.profileImage}
        />
        <div className={styles.profileDetails}>
          <p>
            <strong>Username:</strong> {profileData.username || "Not provided"}
          </p>
          <p>
            <strong>Phone Number:</strong> {profileData.phoneNumber || "N/A"}
          </p>
          <p>
            <strong>Gender:</strong> {profileData.gender || "N/A"}
          </p>
          <p>
            <strong>Religion:</strong> {profileData.religion || "N/A"}
          </p>
          <p>
            <strong>Marital Status:</strong>{" "}
            {profileData.maritalStatus || "N/A"}
          </p>
          <p>
            <strong>Level of Education:</strong>{" "}
            {profileData.educationLevel || "N/A"}
          </p>
          <p>
            <strong>Work Experience:</strong>{" "}
            {profileData.workExperience || "N/A"}
          </p>
          <p>
            <strong>About Me:</strong> {profileData.aboutMe || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
