import { Note } from '../types/notes.type'


export const notesData: Note[] = [
    {
      title: 'Überschrift 1',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      categories: ['Büro', 'Haushalt'],
<<<<<<< HEAD
      id: 1,
      name: 'Admin',
      date: '29.04.2024'
=======
      user: 'Galina',
      date: new Date(Date.now() - 3600*1000),
      id: 1
>>>>>>> e2aa33168a6a117fcdd8eca14342a902654ac966
    }, {
      title: 'Überschrift 2',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      categories: ['Büro'],
<<<<<<< HEAD
      id: 2,
      name: 'Admin',
      date: '29.04.2024'
=======
      user: 'Lisa',
      date: new Date(Date.now() - 24*3600*1000),
      id: 2
>>>>>>> e2aa33168a6a117fcdd8eca14342a902654ac966
    }, {
      title: 'Überschrift 3',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      categories: ['Haushalt'],
<<<<<<< HEAD
      id: 3,
      name: 'Admin',
      date: '29.04.2024'
    }, {
      title: 'Überschrift 4',
      content: 'Kurzer Text',
      categories: [],
      id: 4,
      name: 'Admin',
      date: '29.04.2024'
=======
      user: 'Lisa',
      date: new Date(Date.now() - 48*3600*1000),
      id: 3
    }, {
      title: 'Überschrift 4',
      content: 'Kurzer Text',
      categories: ['Freizeit'],
      user: 'Galina',
      date: new Date(Date.now() - 72*3600*1000),
      id: 4
>>>>>>> e2aa33168a6a117fcdd8eca14342a902654ac966
    }
  ]