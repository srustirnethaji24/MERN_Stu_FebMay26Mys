import { useState, useEffect } from 'react';
import { getMyProfile, updateProfile } from '../services/api';
import './ProfileStyles.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    headline: '',
    skills: '',
    experience: [{ title: '', company: '', duration: '', description: '' }],
    education: [{ school: '', degree: '', fieldOfStudy: '', year: '' }]
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getMyProfile();
      setProfile(res.data.profile);
      setFormData({
        headline: res.data.profile.headline || '',
        skills: (res.data.profile.skills || []).join(', '),
        experience: res.data.profile.experience?.length > 0 
          ? res.data.profile.experience 
          : [{ title: '', company: '', duration: '', description: '' }],
        education: res.data.profile.education?.length > 0 
          ? res.data.profile.education 
          : [{ school: '', degree: '', fieldOfStudy: '', year: '' }]
      });
    } catch (err) {
      console.error('Error fetching profile:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean),
        experience: formData.experience.filter(exp => exp.title || exp.company),
        education: formData.education.filter(edu => edu.school || edu.degree)
      };
      await updateProfile(data);
      setIsEditing(false);
      fetchProfile();
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, { title: '', company: '', duration: '', description: '' }]
    });
  };

  const updateExperience = (index, field, value) => {
    const newExp = [...formData.experience];
    newExp[index] = { ...newExp[index], [field]: value };
    setFormData({ ...formData, experience: newExp });
  };

  const removeExperience = (index) => {
    const newExp = formData.experience.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: newExp.length > 0 ? newExp : [{ title: '', company: '', duration: '', description: '' }] });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { school: '', degree: '', fieldOfStudy: '', year: '' }]
    });
  };

  const updateEducation = (index, field, value) => {
    const newEdu = [...formData.education];
    newEdu[index] = { ...newEdu[index], [field]: value };
    setFormData({ ...formData, education: newEdu });
  };

  const removeEducation = (index) => {
    const newEdu = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEdu.length > 0 ? newEdu : [{ school: '', degree: '', fieldOfStudy: '', year: '' }] });
  };

  if (!profile) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="avatar">{profile.name?.charAt(0).toUpperCase()}</div>
          <div>
            <h2>{profile.name}</h2>
            <p className="headline">{profile.headline || 'No headline set'}</p>
            <p className="email">{profile.email}</p>
          </div>
        </div>

        {!isEditing ? (
          <div>
            <button onClick={() => setIsEditing(true)} className="editBtn">Edit Profile</button>
            
            <div className="section">
              <h3>Skills</h3>
              <div className="skills">
                {profile.skills?.length > 0 ? profile.skills.map((skill, i) => (
                  <span key={i} className="skill">{skill}</span>
                )) : <p className="emptyText">No skills added</p>}
              </div>
            </div>

            <div className="section">
              <h3>Experience ({profile.experience?.length || 0})</h3>
              {profile.experience?.length > 0 ? profile.experience.map((exp, i) => (
                <div key={i} className="item">
                  {exp.title && <strong>{exp.title}</strong>}
                  {exp.company && <span className="subText"> at {exp.company}</span>}
                  {exp.duration && <p className="subText">📅 {exp.duration}</p>}
                  {exp.description && <p className="subText">{exp.description}</p>}
                </div>
              )) : <p className="emptyText">No experience added</p>}
            </div>

            <div className="section">
              <h3>Education ({profile.education?.length || 0})</h3>
              {profile.education?.length > 0 ? profile.education.map((edu, i) => (
                <div key={i} className="item">
                  {edu.school && <strong>🏫 {edu.school}</strong>}
                  {edu.degree && edu.fieldOfStudy && (
                    <p className="subText">🎓 {edu.degree} in {edu.fieldOfStudy}</p>
                  )}
                  {edu.year && <p className="subText">📅 {edu.year}</p>}
                </div>
              )) : <p className="emptyText">No education added</p>}
            </div>

            <div className="section">
              <h3>Connections ({profile.connections?.length || 0})</h3>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Headline */}
            <div className="inputGroup">
              <label className="label">Headline</label>
              <input
                type="text"
                placeholder="e.g., Software Developer at Google"
                value={formData.headline}
                onChange={(e) => setFormData({...formData, headline: e.target.value})}
                className="input"
              />
            </div>

            {/* Skills */}
            <div className="inputGroup">
              <label className="label">Skills (comma separated)</label>
              <input
                type="text"
                placeholder="e.g., React, Node.js, MongoDB, JavaScript"
                value={formData.skills}
                onChange={(e) => setFormData({...formData, skills: e.target.value})}
                className="input"
              />
            </div>

            {/* Experience Section */}
            <div className="editSection">
              <h3 className="editTitle">Experience</h3>
              {formData.experience.map((exp, index) => (
                <div key={index} className="entryCard">
                  <div className="entryHeader">
                    <span className="entryNumber">Job {index + 1}</span>
                    {formData.experience.length > 1 && (
                      <button type="button" onClick={() => removeExperience(index)} className="removeBtn">❌ Remove</button>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Job Title (e.g., Software Engineer)"
                    value={exp.title}
                    onChange={(e) => updateExperience(index, 'title', e.target.value)}
                    className="input"
                  />
                  <input
                    type="text"
                    placeholder="Company (e.g., Google)"
                    value={exp.company}
                    onChange={(e) => updateExperience(index, 'company', e.target.value)}
                    className="input"
                  />
                  <input
                    type="text"
                    placeholder="Duration (e.g., 2020 - Present)"
                    value={exp.duration}
                    onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                    className="input"
                  />
                  <textarea
                    placeholder="Description"
                    value={exp.description}
                    onChange={(e) => updateExperience(index, 'description', e.target.value)}
                    className="textarea"
                    rows="2"
                  />
                </div>
              ))}
              <button type="button" onClick={addExperience} className="addBtn">+ Add Experience</button>
            </div>

            {/* Education Section - FIXED */}
            <div className="editSection">
              <h3 className="editTitle">Education</h3>
              {formData.education.map((edu, index) => (
                <div key={index} className="entryCard">
                  <div className="entryHeader">
                    <span className="entryNumber">School {index + 1}</span>
                    {formData.education.length > 1 && (
                      <button type="button" onClick={() => removeEducation(index)} className="removeBtn">❌ Remove</button>
                    )}
                  </div>
                  
                  {/* School Input */}
                  <input
                    type="text"
                    placeholder="School/University (e.g., MIT)"
                    value={edu.school}
                    onChange={(e) => updateEducation(index, 'school', e.target.value)}
                    className="input"
                  />
                  
                  {/* Degree Input */}
                  <input
                    type="text"
                    placeholder="Degree (e.g., Bachelor of Science)"
                    value={edu.degree}
                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                    className="input"
                  />
                  
                  {/* Field of Study Input */}
                  <input
                    type="text"
                    placeholder="Field of Study (e.g., Computer Science)"
                    value={edu.fieldOfStudy}
                    onChange={(e) => updateEducation(index, 'fieldOfStudy', e.target.value)}
                    className="input"
                  />
                  
                  {/* Year Input */}
                  <input
                    type="text"
                    placeholder="Year (e.g., 2018 - 2022)"
                    value={edu.year}
                    onChange={(e) => updateEducation(index, 'year', e.target.value)}
                    className="input"
                  />
                </div>
              ))}
              <button type="button" onClick={addEducation} className="addBtn">+ Add Education</button>
            </div>

            <div className="buttonGroup">
              <button type="submit" className="saveBtn">💾 Save Profile</button>
              <button type="button" onClick={() => setIsEditing(false)} className="cancelBtn">Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;