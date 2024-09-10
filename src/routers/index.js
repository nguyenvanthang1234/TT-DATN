import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundpage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInpage from "../pages/SignInPage/SignInpage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import Profilepage from "../pages/ProfilePage/Profilepage";
import AdminPage from "../pages/AdminPage/AdminPage";
export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/signUp",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "/signIn",
    page: SignInpage,
    isShowHeader: false,
  },
  {
    path: "/productDetail",
    page: ProductDetailPage,
    isShowHeader: true,
  },
  {
    path: "/profile-user",
    page: Profilepage,
    isShowHeader: true,
  },
  {
    path: "/type",
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: "/system/admin",
    page: AdminPage,
    isShowHeader: false,
    isPrivated: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
