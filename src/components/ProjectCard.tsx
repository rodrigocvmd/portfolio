// src/components/ProjectCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import TechTag from "./TechTag";
import { useState } from "react";

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	technologies: string[];
	projectSlug: string;
	liveUrl?: string;
	repoUrl?: string;
	inDevelopment?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	imageUrl,
	technologies,
	projectSlug,
	liveUrl,
	repoUrl,
	inDevelopment,
}) => {
	const [showAllTech, setShowAllTech] = useState(false);

	const visibleTechnologies = showAllTech ? technologies : technologies.slice(0, 4);

	const LiveLink = inDevelopment ? "div" : Link;

	return (
		<div className="group bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full">
			<Link
				href={`/projetos/${projectSlug}`}
				className="relative w-full h-48 sm:h-52 overflow-hidden">
				{inDevelopment && (
					<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
						<span className="text-white text-lg font-bold px-4 py-2 bg-yellow-500 rounded-md">
							Em Desenvolvimento
						</span>
					</div>
				)}
				<Image
					src={imageUrl}
					alt={`Thumbnail do projeto ${title}`}
					fill
					className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
						inDevelopment ? "opacity-30" : ""
					}`}
				/>
			</Link>
			<div className="p-5 sm:p-6 flex flex-col flex-grow text-center">
				<Link href={`/projetos/${projectSlug}`}>
					<h3 className="text-2xl sm:text-3xl font-semibold font-heading text-light-text dark:text-dark-text mb-3 min-h-[4.5rem]">
						{title}
					</h3>
				</Link>
				<div className="mb-4">
					<p className="text-lg text-light-text dark:text-dark-text text-center">
						{description}
					</p>
				</div>

				<div className="mb-4 flex flex-wrap justify-center items-center gap-2">
					{visibleTechnologies.map((tech) => (
						<TechTag key={tech} name={tech} />
					))}
					{!showAllTech && technologies.length > 4 && (
						<span className="ml-1 text-sm font-medium text-light-text dark:text-dark-text cursor-default">
							+{technologies.length - 4}
						</span>
					)}
				</div>

				<div className="mt-auto pt-4 border-t border-light-primary dark:border-dark-primary">
					<div className="flex justify-around items-center space-x-3">
						<Link
							href={`/projetos/${projectSlug}`}
							className="text-base font-medium text-light-accent dark:text-dark-accent transition-transform duration-300 hover:scale-110">
							Ver Detalhes &rarr;
						</Link>
						<div className="flex space-x-4">
							{liveUrl && (
								<div className="relative group">
									<LiveLink
										href={inDevelopment ? "" : liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className={`text-base text-light-text dark:text-dark-text transition-colors ${
											inDevelopment
												? "cursor-not-allowed text-gray-500"
												: "hover:text-light-accent dark:hover:text-dark-accent"
										}`}>
										Ver Online
									</LiveLink>
								</div>
							)}

							{repoUrl && (
								<Link
									href={repoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-base text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition-colors">
									Repositório
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
