// src/components/ProjectCard.tsx
'use client';

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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	imageUrl,
	technologies,
	projectSlug,
	liveUrl,
	repoUrl,
}) => {
	const [showAllTech, setShowAllTech] = useState(false);

	const visibleTechnologies = showAllTech ? technologies : technologies.slice(0, 4);

	return (
		<div className="bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
			<div className="relative w-full h-48 sm:h-56 overflow-hidden">
				<Image
					src={imageUrl}
					alt={`Thumbnail do projeto ${title}`}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			<div className="p-5 sm:p-6 flex flex-col flex-grow">
				<h3 className="text-xl sm:text-2xl font-semibold font-heading text-light-text dark:text-dark-text mb-2">
					{title}
				</h3>
				<p className="text-sm sm:text-base text-light-text dark:text-dark-text mb-4 flex-grow">
					{description.substring(0, 100)}...
				</p>

				<div className="mb-4">
					{visibleTechnologies.map((tech) => (
						<TechTag key={tech} name={tech} />
					))}
					{!showAllTech && technologies.length > 4 && (
						<button onClick={() => setShowAllTech(true)} className="text-xs font-medium text-light-accent dark:text-dark-accent hover:underline">
							ver +{technologies.length - 4}
						</button>
					)}
				</div>

				<div className="mt-auto pt-4 border-t border-light-primary dark:border-dark-primary">
					<div className="flex justify-between items-center space-x-3">
						<Link
							href={`/projetos/${projectSlug}`}
							className="text-sm font-medium text-light-accent dark:text-dark-accent hover:underline">
							Ver Detalhes &rarr;
						</Link>
						<div className="flex space-x-3">
							{liveUrl && (
								<Link
									href={liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition-colors">
									Ver Online
								</Link>
							)}

							{repoUrl && (
								<Link
									href={repoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition-colors">
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
