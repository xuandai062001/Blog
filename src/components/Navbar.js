import React, { useState, useEffect }from "react";
import sanityClient from "../Client";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const [categories, setCategories] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "category"]{
      title,
      slug,
    }`
			)
			.then((data) => setCategories(data))
			.catch(console.error);
	}, []);

	return (
		<nav className="container lg:px-0 px-5 py-2 lg:py-0 lg:w-3/4 w-full mx-auto flex flex-col lg:flex-row justify-between h-20 items-center font-bold">
			<NavLink to="/">
				<p className="text-xl lg:text-2xl">😋DAVID CODE</p>
			</NavLink>
			
			<ul className="flex navbar">
				<li>
					<NavLink
						to={"/"}
						exact
						className="nav-link"
						activeClassName="active-link"
					>
						Home
					</NavLink>
				</li>
				<li className="categories pl-4">
					<span>Categories</span>
					<ul>
						{categories &&
						categories.map((category) => (
							<li>
								<Link to={"/filteredposts/" + category.title}>
									<button
									>
										{category.title}
									</button>
								</Link>
							</li>
						))}
					</ul>
				</li>
				<a className="pl-4" href="https://profile.xuandai.live/">About Me</a>
			</ul>
			
		</nav>
	);
};

export default  NavBar;