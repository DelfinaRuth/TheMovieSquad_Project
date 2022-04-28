// import { Link } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { useNavigate } from "react-router";



// const NavBar = () => {
//   const navigate = useNavigate();
//   const userLog = useContext(AuthContext);
//   const { toggleAuth, isLoggedIn, isAuthenticated } = userLog;

//   //axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7571866020be0fc96f4cbd335eaa5117&query=${input}`)

//   // para tenerlo de referencia --> <input onChange={(e) => { setInput(e.target.value) }} value={input} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="choose a movie" />

//   const handleLogOut = (e) => {
//     e.preventDefault();

//     toggleAuth(null);
//     alert("Goodbye, see you next time 🦥");
//     navigate("/");
//   };
//   //console.log("isLoggedIn-->", isLoggedIn.user);


//   return (
//     <>
//         <Box>
//           <Flex>
//             <li>
//               <Link to="/">
//                 <a class="navbar-brand">TMDB 🎞️ </a>
//               </Link>
//             </li>

//             <li>
//               <input type="text" placeholder="search your movie" />
//             </li>

//             <Link to="/login">
//               <li>
//                 <a>Log In</a>
//               </li>
//             </Link>

//             <Link to="/">
//               <li>
//                 <a onClick={handleLogOut} class="nav-link" href="#">
//                   Log Out
//                 </a>
//               </li>
//             </Link>

//             <Link to="/register">
//               <li>
//                 <a>Sign Up</a>
//               </li>
//             </Link>
//           </Flex>
//         </Box>
//     </>
//   );
// };

// export default NavBar;
