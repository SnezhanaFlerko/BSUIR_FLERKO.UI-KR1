using Microsoft.AspNetCore.Mvc;

namespace BSUIR_FLERKO.UI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
