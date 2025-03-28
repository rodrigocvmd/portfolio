import React from "react";
import { Link, useLocation } from "react-router-dom";

function Maintenance() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-2xl 4xs:text-3xl 2xs:text-4xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-7xl 6xs:mb-2 2xs:mb-3 lg:mb-5 2xl:mb-8  mt-3">
				Seção em breve manutenção
			</h1>
			<p className="text-2xl 4xs:text-3xl 2xs:text-4xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-7xl">
				= )
			</p>

			<Link
				to={`/`}
				className=" p-0 text-lg 3xs:text-xl 2xs:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl !bg-secondary rounded-lg sm:rounded-xl 2xl:rounded-2xl 3xl:rounded-3xl py-2 sm:py-3 xl:py-5 3xl:py-7 px-5 xs:px-6 sm:px-7 xl:px-9 3xl:px-12 !shadow-lg my-5">
				Voltar para a Home
			</Link>
			<Link
				to={`/findme`}
				className=" p-0 text-lg 3xs:text-xl 2xs:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl !bg-secondary rounded-lg sm:rounded-xl 2xl:rounded-2xl 3xl:rounded-3xl py-2 sm:py-3 xl:py-5 3xl:py-7 px-5 xs:px-6 sm:px-7 xl:px-9 3xl:px-12 !shadow-lg">
				Entre em contato
			</Link>
		</div>
	);
}

export default Maintenance;
