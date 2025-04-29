namespace WebApplication1.Models
{
    public class User : UserDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool  IsAdmin { get; set; }

    }
}
