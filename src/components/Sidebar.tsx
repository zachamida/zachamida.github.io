import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaGraduationCap,
  FaUser
} from 'react-icons/fa';

type ProfileInfo = {
  name: string;
  title: string;
  bio?: string;
  researchInterests: string[];
  email: string;
  linkedIn?: string;
  github?: string;
  scholar?: string;
  cvUrl?: string;
  imageUrl?: string;
};

export function Sidebar({ profile }: { profile: ProfileInfo }) {
  console.log('Profile data:', profile);
  
  return (
    <div className="w-full p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 max-h-[calc(100vh-4rem)] overflow-y-auto">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gray-200">
          {profile.imageUrl ? (
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <FaUser className="w-20 h-20" />
            </div>
          )}
        </div>
      </div>

      {/* Profile Info */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-100 mb-1">{profile.name}</h2>
        <p className="text-sm text-gray-400 mb-4">{profile.title}</p>
        {profile.bio && <p className="text-sm text-gray-400 mb-4">{profile.bio}</p>}
      </div>

      {/* Research Interests */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-100 mb-3">
          Research Interests
        </h3>
        <div className="flex flex-wrap gap-2">
          {profile.researchInterests.map((interest) => (
            <div
              key={interest}
              className="text-sm text-gray-300 bg-gray-700 rounded-full px-3 py-1"
            >
              {interest}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Links */}
      <div className="grid grid-cols-2 gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <FaEnvelope className="w-5 h-5" />
          <span className="text-sm">Email</span>
        </a>
        {profile.linkedIn && (
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
        )}
        {profile.cvUrl && (
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaFileDownload className="w-5 h-5" />
            <span className="text-sm">CV</span>
          </a>
        )}
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
        )}
        {profile.scholar && (
          <a
            href={profile.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaGraduationCap className="w-5 h-5" />
            <span className="text-sm">Scholar</span>
          </a>
        )}
      </div>
    </div>
  );
}
