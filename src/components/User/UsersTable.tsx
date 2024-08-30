import { TUser } from "../../Interface/user";
import { useGetAllUserQuery, useUpdateUserRoleMutation } from "../../redux/features/user/userApi";

const UsersTable = () => {
    const { data } = useGetAllUserQuery(undefined);
    const [updateRole] = useUpdateUserRoleMutation()
    const users = data?.data

    const handleUserRole = (id: string) => {
        const confirmDelete = window.confirm('Are you sure you want change ROLE?');
        if (confirmDelete) {
            updateRole(id)
        }
    };
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="">
                        <th className="px-6 py-3 text-left">Name</th>
                        <th className="px-6 py-3 text-left">Email</th>
                        <th className="px-6 py-3 text-left">Role</th>
                        <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user: TUser) => (
                        <tr key={user._id}>
                            <td className="border px-6 py-4 uppercase font-medium">{user?.name}</td>
                            <td className="border px-6 py-4">{user?.email}</td>
                            <td className={`border px-6 py-4 uppercase font-medium ${user?.role === 'admin' ? 'text-[#1c8076]' : 'text-[#ed3330]'} `}>{user?.role}</td>
                            <td className="border px-6 py-4">
                                <button
                                    className="bg-primary text-white px-4 py-2 rounded"
                                    onClick={() => handleUserRole(user._id as string)}
                                >
                                    Edit Role
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;