"use client";

import { useState } from "react";
import TechTag from "@/components/TechTag";

interface TechListProps {
	technologies: string[];
}

export default function TechList({ technologies }: TechListProps) {
	const [showAllTech, setShowAllTech] = useState(false);
	const visibleTechnologies = showAllTech ? technologies : technologies.slice(0, 8);

	return (
		<section className="mb-12">
			<h2 className="font-heading text-2xl font-bold text-light-text dark:text-dark-text mb-4 text-center">
				Tecnologias e Habilidades Aplicadas
			</h2>
			<div className="flex flex-wrap justify-center gap-3">
				{visibleTechnologies.map((tech) => (
					<TechTag key={tech} name={tech} />
				))}
			</div>
			{!showAllTech && technologies.length > 8 && (
				<div className="text-center mt-4">
					<button
						onClick={() => setShowAllTech(true)}
						className="text-light-accent dark:text-dark-accent font-semibold hover:underline">
						Ver todas
					</button>
				</div>
			)}
		</section>
	);
}
