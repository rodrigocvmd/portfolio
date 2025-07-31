'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

// Definindo a interface para um único projeto para tipagem
interface Project {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    projectSlug: string;
    liveUrl?: string;
    repoUrl?: string;
}

interface ProjetosGridProps {
    allProjects: Project[];
}

export default function ProjetosGrid({ allProjects }: ProjetosGridProps) {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 lg:gap-10 items-stretch">
            {allProjects.map((project) => (
                <ProjectCard
                    key={project.projectSlug}
                    {...project}
                />
            ))}
        </div>
    );
}
