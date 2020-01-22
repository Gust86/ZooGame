import { Animal } from './animal';
import { Chore } from './chore';

export interface Zookeeper {
    animalList: Animal[];
    choreList: Chore[];
    resources: number;

    onFeint(name: string);
}