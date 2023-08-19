import { capitalizeKeys, uppercaseKeys, uncapitalizeKeys, lowercaseKeys } from '.';
import { A } from 'ts-toolbelt';

it('capitalizes keys', () => {
	interface UncapitalizedObject {
		required: string;
		optional?: string;
		1: string;
		2?: string;
		'': string;
	}

	const object: UncapitalizedObject = {
		required: 'test',
		optional: 'test',
		1: 'test',
		2: 'test',
		'': 'test'
	};

	const capitalizedObject = capitalizeKeys(object);

	expect(capitalizedObject).toStrictEqual({
		Required: 'test',
		Optional: 'test',
		1: 'test',
		2: 'test',
		'': 'test'
	});

	const typeCheck: A.Equals<
		typeof capitalizedObject,
		{
			'': string;
			Required: string;
		} & {
			Optional?: string;
		} & Omit<UncapitalizedObject, '' | 'required' | 'optional'>
	> = 1;

	expect(typeCheck).toBe(1);
});

it('uppercases keys', () => {
	interface UncapitalizedObject {
		required: string;
		optional?: string;
		1: string;
		2?: string;
		'': string;
	}

	const object: UncapitalizedObject = {
		required: 'test',
		optional: 'test',
		1: 'test',
		2: 'test',
		'': 'test'
	};

	const uppercasedObject = uppercaseKeys(object);

	expect(uppercasedObject).toStrictEqual({
		REQUIRED: 'test',
		OPTIONAL: 'test',
		1: 'test',
		2: 'test',
		'': 'test'
	});

	const typeCheck: A.Equals<
		typeof uppercasedObject,
		{
			'': string;
			REQUIRED: string;
		} & {
			OPTIONAL?: string;
		} & Omit<UncapitalizedObject, '' | 'required' | 'optional'>
	> = 1;

	expect(typeCheck).toBe(1);
});

it('uncapitalizes keys', () => {
	interface CapitalizedObject {
		Required: string;
		Optional?: string;
		1: string;
		2?: string;
		'': string;
	}

	const object: CapitalizedObject = {
		Required: 'test',
		Optional: 'test',
		1: 'test',
		2: 'test',
		'': 'test'
	};

	const uncapitalizedObject = uncapitalizeKeys(object);

	expect(uncapitalizedObject).toStrictEqual({
		required: 'test',
		optional: 'test',
		1: 'test',
		2: 'test',
		'': 'test'
	});

	const typeCheck: A.Equals<
		typeof uncapitalizedObject,
		{
			'': string;
			required: string;
		} & {
			optional?: string;
		} & Omit<CapitalizedObject, '' | 'Required' | 'Optional'>
	> = 1;

	expect(typeCheck).toBe(1);
});

it('lowercases keys', () => {
	interface UppercasedObject {
		REQUIRED: string;
		OPTIONAL?: string;
		1: string;
		2?: string;
		'': string;
	}

	const object: UppercasedObject = {
		REQUIRED: 'test',
		OPTIONAL: 'test',
		1: 'test',
		2: 'test',
		'': 'test'
	};

	const lowercasedObject = lowercaseKeys(object);

	expect(lowercasedObject).toStrictEqual({
		required: 'test',
		optional: 'test',
		1: 'test',
		2: 'test',
		'': 'test'
	});

	const typeCheck: A.Equals<
		typeof lowercasedObject,
		{
			'': string;
			required: string;
		} & {
			optional?: string;
		} & Omit<UppercasedObject, '' | 'REQUIRED' | 'OPTIONAL'>
	> = 1;

	expect(typeCheck).toBe(1);
});
