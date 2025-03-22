import { Component, computed, inject, input, Signal } from '@angular/core';
import { AnnoncesService } from '../../shared/services/annonces/annonces.service';
import { Annonce } from '../../shared/models/annonce';
import { CommonModule } from '@angular/common';
import { STATUS_COLOR } from '../../shared/tokens/status-color-token';

@Component({
  selector: 'fdw-candidature-detail',
  imports: [CommonModule],
  template: `
    <div class="flex flex-col max-h-content justify-center items-center">
      @if (annonce()) {
      <div
        class="w-4xl mx-auto bg-JobTracker-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl my-6"
      >
        <!-- En-tête de l'annonce -->
        <div class="bg-JobTracker-side p-6 relative">
          <div class="flex flex-col justify-center gap-8">
            <div class="flex justify-center">
              <h2
                class="text-4xl font-bold text-JobTracker-white truncate mb-1 uppercase"
              >
                {{ annonce().poste }}
              </h2>
            </div>
            <div
              class="flex justify-center items-center gap-3 text-JobTracker-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                  d="M8 8h2v4H8zm0 6h2v4H8zm6-6h2v4h-2zm0 6h2v4h-2zm-6 6h2v4H8zm6 0h2v4h-2z"
                />
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                  d="M30 14a2 2 0 0 0-2-2h-6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v26h28ZM4 4h16v24H4Zm18 24V14h6v14Z"
                />
              </svg>
              <p class="text-3xl text-JobTracker-white font-medium">
                {{ annonce().entreprise.name }}
              </p>
            </div>
          </div>
          <div class="flex gap-12 mt-3 justify-center items-center">
            <div class="flex items-center text-JobTracker-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 2 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {{ annonce().entreprise.ville }}
            </div>
            <div class="flex items-center text-JobTracker-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                viewBox="0 2 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M15 11v.01M5.173 8.378a3 3 0 1 1 4.656-1.377" />
                  <path
                    d="M16 4v3.803A6.02 6.02 0 0 1 18.658 11h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.342c-.336.95-.907 1.8-1.658 2.473V19.5a1.5 1.5 0 0 1-3 0v-.583a6 6 0 0 1-1 .083h-4a6 6 0 0 1-1-.083v.583a1.5 1.5 0 0 1-3 0v-2.027A6 6 0 0 1 8.999 7h2.5z"
                  />
                </g>
              </svg>
              {{ annonce().salaire | currency : 'EUR' : 'symbol' : '1.0-0' }}
              /an
            </div>
            <div class="flex items-center text-JobTracker-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 2 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              {{ annonce().typeContrat }}
            </div>
            <div class="flex items-center text-JobTracker-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 2 24 24"
                stroke="currentColor"
              >
                <path
                stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="currentColor"
                  d="M4.616 20q-.691 0-1.153-.462T3 18.384V8.616q0-.691.463-1.153T4.615 7H9V5.615q0-.69.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h4.385q.69 0 1.152.463T21 8.616v9.769q0 .69-.463 1.153T19.385 20zm0-1h14.769q.23 0 .423-.192t.192-.424V8.616q0-.231-.192-.424T19.385 8H4.615q-.23 0-.423.192T4 8.616v9.769q0 .23.192.423t.423.192M10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615zM4 19V8z"
                />
              </svg>
              {{ annonce().modeTravail }}
            </div>
          </div>
        </div>

        <!-- Contenu de l'annonce -->
        <div class="p-6 overflow-y-scroll max-h-[490px]">
          <div class="mb-6 prose max-w-none">
            <h3>À propos de l’offre d’emploi :</h3>
            <p class="mb-2 pl-3">
              Adeptis Group recrute un Développeur Full Stack Senior pour le
              compte d’un éditeur technologique innovant spécialisé en
              cybersécurité. Notre client est une startup française dynamique
              qui développe des solutions de protection pour les entreprises.
              Grâce à sa technologie d’analyse comportementale, elle offre une
              protection fluide et sans installation, révolutionnant ainsi la
              gestion de la sécurité web.
            </p>
            <h3>Descriptif de la mission :</h3>
            <ul class="mb-2 pl-7">
              <li class="list-disc">
                Participer au développement du portail (front-office et
                back-office) afin d’enrichir les fonctionnalités de la solution.
              </li>
              <li class="list-disc">
                Collaborer étroitement avec les équipes techniques et les
                experts métier pour faire évoluer le produit.
              </li>
              <li class="list-disc">
                Proposer des améliorations en termes d’expérience utilisateur et
                assurer la qualité de vos développements par des tests
                rigoureux.
              </li>
            </ul>
            <h3>Compétences rechercher :</h3>
            <ul class="mb-2 pl-7">
              <li class="list-disc">
                Excellente maîtrise des technologies front-end, notamment
                Angular.
              </li>
              <li class="list-disc">
                Connaissances en développement back-end (Java) ou forte
                motivation pour apprendre.
              </li>
              <li class="list-disc">Expérience avec Docker et Git (GitLab).</li>
              <li class="list-disc">
                Autonomie, esprit d’équipe et force de proposition
                indispensables.
              </li>
            </ul>
            <h3>Avantage dans la société :</h3>
            <ul class="mb-2 pl-7">
              <li class="list-disc">
                Excellente maîtrise des technologies front-end, notamment
                Angular.
              </li>
              <li class="list-disc">
                Connaissances en développement back-end (Java) ou forte
                motivation pour apprendre.
              </li>
              <li class="list-disc">Expérience avec Docker et Git (GitLab).</li>
              <li class="list-disc">
                Autonomie, esprit d’équipe et force de proposition
                indispensables.
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-between items-center px-12 py-4">
          <div class="text-sm text-gray-500">
            Publiée le {{ annonce().createdAT | date : 'dd/MM/yyyy' }}
          </div>
          <span
            class="px-6 py-3 text-sm text-JobTracker-white font-semibold rounded-full"
            [class]="statusColorClass(this.annonce().status)"
          >
            {{ annonce().status }}
          </span>
        </div>
        <div class="flex justify-center p-4">
          <a
            [href]="annonce().annonceLink"
            target="_blank"
            class="w-[250px] px-5 py-2 bg-JobTracker-side hover:bg-JobTracker-side-hover text-white font-medium rounded-md transition-colors duration-200 text-center items-center"
          >
            Postuler
          </a>
        </div>
      </div>
      } @else {
      <p>Chargement de l'annonce...</p>
      }
    </div>
  `,
})
export class CandidatureDetailComponent {
  readonly annonceService = inject(AnnoncesService);
  readonly status = inject(STATUS_COLOR);
  readonly id = input<string | null>();

  readonly annonces: Signal<Annonce[]> = this.annonceService.getAll();

  readonly annonce: Signal<Annonce | any> = computed(() => {
    if (!this.id()) {
      return null;
    }
    return this.annonces().find(
      (annonce) => annonce.id.toString() === this.id()
    );
  });

  protected statusColorClass(status: string): string {
    const statusConfig = this.status.find((item) => item.label === status);
    return statusConfig?.colorClassBg || 'text-JobTracker-blue';
  }
}
