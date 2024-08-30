import UsersTable from "./UsersTable";


const UserManagement = () => {
    return (
        <div className="m-2">
            <h1 className="text-4xl uppercase font-bold text-center my-2 ">All Users</h1>
            <hr />
            <UsersTable />
        </div>
    );
};

export default UserManagement;