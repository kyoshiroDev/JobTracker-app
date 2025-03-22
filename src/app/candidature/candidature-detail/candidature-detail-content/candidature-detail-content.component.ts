import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Annonce } from '../../../shared/models/annonce';

@Component({
  selector: 'fdw-candidature-detail-content',
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
    <ul class="mb-2 pl-7">
      <li class="list-disc">
        Participer au développement du portail (front-office et back-office)
        afin d’enrichir les fonctionnalités de la solution.
      </li>
      <li class="list-disc">
        Collaborer étroitement avec les équipes techniques et les experts métier
        pour faire évoluer le produit.
      </li>
      <li class="list-disc">
        Proposer des améliorations en termes d’expérience utilisateur et assurer
        la qualité de vos développements par des tests rigoureux.
      </li>
    </ul>
    <h3>Compétences rechercher :</h3>
    <ul class="mb-2 pl-7">
      <li class="list-disc">
        Excellente maîtrise des technologies front-end, notamment Angular.
      </li>
      <li class="list-disc">
        Connaissances en développement back-end (Java) ou forte motivation pour
        apprendre.
      </li>
      <li class="list-disc">Expérience avec Docker et Git (GitLab).</li>
      <li class="list-disc">
        Autonomie, esprit d’équipe et force de proposition indispensables.
      </li>
    </ul>
    <h3>Avantage dans la société :</h3>
    <ul class="mb-2 pl-7">
      <li class="list-disc">
        Excellente maîtrise des technologies front-end, notamment Angular.
      </li>
      <li class="list-disc">
        Connaissances en développement back-end (Java) ou forte motivation pour
        apprendre.
      </li>
      <li class="list-disc">Expérience avec Docker et Git (GitLab).</li>
      <li class="list-disc">
        Autonomie, esprit d’équipe et force de proposition indispensables.
      </li>
    </ul>
  </div>`,
})
export class CandidatureDetailContentComponent {
  readonly annonce = input.required<Annonce>();
}
