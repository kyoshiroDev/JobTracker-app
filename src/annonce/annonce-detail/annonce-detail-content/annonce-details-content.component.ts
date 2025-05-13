import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Annonce } from '../../annonce';

@Component({
  selector: 'fdw-annonce-detail-content',
  imports: [CommonModule],
  template: ` <div class="mb-6 prose max-w-none">
    <h3>À propos de l’offre d’emploi :</h3>
    <p class="mb-2 pl-3">
      Adeptis Group recrute un Développeur Full Stack Senior pour le compte d’un
      éditeur technologique innovant spécialisé en cybersécurité. Notre client
      est une startup française dynamique qui développe des solutions de
      protection pour les entreprises. Grâce à sa technologie d’analyse
      comportementale, elle offre une protection fluide et sans installation,
      révolutionnant ainsi la gestion de la sécurité web.
    </p>
    <h3>Descriptif de la mission :</h3>
    <div class="mb-2 pl-7">
      <p class="list-disc">
        Participer au développement du portail (front-office et back-office)
        afin d’enrichir les fonctionnalités de la solution.
        Collaborer étroitement avec les équipes techniques et les experts métier
        pour faire évoluer le produit.
        Proposer des améliorations en termes d’expérience utilisateur et assurer
        la qualité de vos développements par des tests rigoureux.
      </p>
    </div>
    <h3>Compétences rechercher :</h3>
    <div class="mb-2 pl-7">
      <p class="list-disc">
        Excellente maîtrise des technologies front-end, notamment Angular.
        Connaissances en développement back-end (Java) ou forte motivation pour
        apprendre.
        Expérience avec Docker et Git (GitLab).
        Autonomie, esprit d’équipe et force de proposition indispensables.
      </p>
    </div>
    <h3>Avantage dans la société :</h3>
    <div class="mb-2 pl-7">
      <p class="list-disc">
        Excellente maîtrise des technologies front-end, notamment Angular.
        Connaissances en développement back-end (Java) ou forte motivation pour
        apprendre.
        Expérience avec Docker et Git (GitLab).
        Autonomie, esprit d’équipe et force de proposition indispensables.
      </p>
    </div>
  </div>`,
})
export class AnnonceDetailContentComponent {
  readonly annonce = input.required<Annonce>();
}
