import { Users } from "lucide-react"

export function TeamStructure({ team }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Users size={24} className="text-primary mr-2" />
        <h3 className="text-xl font-heading font-bold text-primary">Team Structure</h3>
      </div>

      <div className="relative">
        {/* Leader */}
        <div className="flex justify-center mb-8">
          <div className="bg-primary text-white rounded-lg p-4 w-64 text-center">
            <h4 className="font-bold">{team.leader.name}</h4>
            <p className="text-sm">{team.leader.role}</p>
          </div>
        </div>

        {/* Connecting lines */}
        <div className="absolute left-1/2 top-16 w-0.5 h-8 bg-gray-300 transform -translate-x-1/2"></div>

        {/* Departments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {team.departments.map((dept, index) => (
            <div key={index} className="relative">
              <div className="bg-secondary bg-opacity-10 rounded-lg p-4 text-center">
                <h4 className="font-bold text-secondary">{dept.name}</h4>
                <p className="text-sm text-gray-700">{dept.description}</p>
              </div>

              {/* Connecting lines for department members */}
              {dept.members.length > 0 && (
                <div className="absolute left-1/2 top-full w-0.5 h-4 bg-gray-300 transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {team.departments.flatMap((dept) =>
            dept.members.map((member, memberIndex) => (
              <div key={`${dept.name}-${memberIndex}`} className="bg-gray-50 rounded-lg p-3 text-center">
                <h5 className="font-medium text-primary">{member.name}</h5>
                <p className="text-xs text-gray-600">{member.role}</p>
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  )
}
