namespace Taskify.Data.Services
{
    public interface IDbInitializerService
    {
        void Initialize();
        void SeedData();
    }
}