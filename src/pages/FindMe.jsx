import { useEffect } from "react";
import contactInfo from "../db/contact";
import ContactCard from "../components/general/ContactCard";

function FindMe() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="flex flex-col w-full items-center justify-center gap-4 md:gap-x-10 md:gap-y-5 xl:gap-x-5 xl:gap-y-1 2xl:gap-x-1 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 sm:place-items-center md:mx-16 3xs:mb-2 3xs:my-2 3xs:mt-5 2xs:my-3">
			{contactInfo.map((contact) => (
				<ContactCard
					key={contact.id}
					title={contact.title}
					numberOrId={contact.numberOrId}
					iconId={contact.iconId}
					id={contact.id}
					href={contact.href}
				/>
			))}
		</div>
	);
}

export default FindMe;
