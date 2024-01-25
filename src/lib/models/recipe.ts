export enum Unit {
	'g',
	'dag',
	'kg',
	'ml',
	'l',
	'szt.'
}

export enum CategoryEnum {
	'śniadanie',
	'obiad',
	'kolacja',
	'deser',
	'napój',
	'przekąska'
}

export enum SubcategoryEnum {
	'kanapka',
	'ciasto',
	'warzywa',
	'ryż',
	'zapiekanka',
	'makaron',
	'pizza',
	'sałatka',
	'zupa',
	'ciastko',
	'koktajl'
}

export class Ingredient {
	name: string | null = null;
	quantity: number | null = null;
	unit: Unit | '' = '';
}

export class Step {
	description: string | null = null;
}

export class Recipe {
	name: string = '';
	difficulty: number = 2;
	time: number | null = null;
	servings: number | null = null;
	ingredients: Ingredient[] = [new Ingredient()];
	steps: Step[] = [new Step()];
	is_vegetarian: boolean = false;
	is_vegan: boolean = false;
	category: CategoryEnum | '' = '';
	subcategory: SubcategoryEnum | '' = '';
	description: string = '';
}
