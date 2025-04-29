
using System.Data.SqlClient;

namespace WebApplication1.Models
{
    public static class DBServices
    {
        static string conStr = @"Data Source=LAB-G700;Initial Catalog=DBUsers;User ID=sa;Password=RuppinTech!;";



        private static User ExcQUser(string command)
        {
            User user = null;
            SqlConnection con = new SqlConnection(conStr);
            SqlCommand comm = new SqlCommand(command, con);

            comm.Connection.Open();
            SqlDataReader reader = comm.ExecuteReader();
            if (reader.Read())
            {
                user = new User()
                {
                    Id = (int)reader["Id"],
                    Name = (string)reader["Name"],
                    IsAdmin = (bool)reader["IsAdmin"],
                    Mail = (string)reader["Mail"],
                    Password = (string)reader["Password"],
                };
            }

            comm.Connection.Close();

            return user;
        }

        internal static User Login(UserDTO userdto)
        {
            return ExcQUser(
                $" SELECT * " +
                $" FROM TBUsers " +
                $" WHERE mail='{userdto.Mail}' and password='{userdto.Password}'");
        }
    }
}
