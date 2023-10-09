import { Modal } from 'bootstrap'

declare var window;

export class VideoGameModel {
  videoGame: VideoGame[] = [
    new VideoGame('The Legend of Zelda', 'Master Sword, Triforce, Princess Zelda, blah blah blah')
  ];
  vGIndex: number;

  showVGModal(modalType: string, id?: number) {
    const vGModal = new window.bootstrap.Modal(document.getElementById(modalType));

    if (id !== undefined) {
      if (modalType === 'editVGModal') {
        this.fillModal('Edit');
      } else if (modalType === 'viewVGModal') {
        this.fillModal('View');
      } else if (modalType === 'deleteVGModal') {
        console.log('delete');
      }
    }

    vGModal.show();
  }

  resetForm(formType) {
    const vGForm: HTMLFormElement = document.querySelector(formType);
    vGForm.reset();
  }

  fillModal(modalType: string) {
    if (modalType === 'Edit') {
      const Form: HTMLFormElement = document.querySelector(`#${modalType.toLowerCase()}Form`);
      const taskName: HTMLInputElement = document.querySelector(`#input${modalType}Title`);
      const taskDetails: HTMLInputElement = document.querySelector(`#input${modalType}Description`);
      taskName.value = this.videoGame[this.vGIndex].title;
      taskDetails.value = this.videoGame[this.vGIndex].description;
    } else if (modalType === 'View') {

    }
  }

  addVideoGame(sentVG: VideoGame) {
    this.videoGame.push(sentVG);
  }

  deleteGame(id: number) {
    this.videoGame.splice(this.vGIndex, 1);
  }
}

export class VideoGame {
  constructor(
    public title: string,
    public description: string,
    ) {
  }
}

