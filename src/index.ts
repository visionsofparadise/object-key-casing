type IfString<K> = K extends string ? K : never;

type RequiredStringKeys<O extends object> = {
	[K in keyof O]-?: {} extends Pick<O, K> ? never : IfString<K>;
}[keyof O];

type OptionalStringKeys<O extends object> = {
	[K in keyof O]-?: {} extends Pick<O, K> ? IfString<K> : never;
}[keyof O];

const setObjectKeys = <A extends object, B extends object>(
	object: A,
	fn: (key: keyof A & string) => keyof B & string
): B => {
	const newObject: Record<PropertyKey, any> = {};

	for (const key in object) {
		const newKey = typeof key !== 'string' || key === '' ? key : fn(key);

		newObject[newKey] = object[key];
	}

	return newObject;
};

export type CapitalizeKeys<T extends object> = {
	[K in Capitalize<RequiredStringKeys<T>>]: Uncapitalize<K> extends keyof T ? T[Uncapitalize<K>] : never;
} & {
	[K in Capitalize<OptionalStringKeys<T>>]?: Uncapitalize<K> extends keyof T ? T[Uncapitalize<K>] : never;
} & Omit<T, keyof T & string>;

export const capitalizeKeys = <T extends object>(object: T) =>
	setObjectKeys<T, CapitalizeKeys<T>>(
		object,
		key =>
			`${key.slice(0, 1).toUpperCase()}${key.slice(1)}` as
				| Capitalize<RequiredStringKeys<T>>
				| Capitalize<OptionalStringKeys<T>>
	);

export type UppercaseKeys<T extends object> = {
	[K in Uppercase<RequiredStringKeys<T>>]: Lowercase<K> extends keyof T ? T[Lowercase<K>] : never;
} & {
	[K in Uppercase<OptionalStringKeys<T>>]?: Lowercase<K> extends keyof T ? T[Lowercase<K>] : never;
} & Omit<T, keyof T & string>;

export const uppercaseKeys = <T extends object>(object: T) =>
	setObjectKeys<T, UppercaseKeys<T>>(
		object,
		key => `${key.toUpperCase()}` as Uppercase<RequiredStringKeys<T>> | Uppercase<OptionalStringKeys<T>>
	);

export type UncapitalizeKeys<T extends object> = {
	[K in Uncapitalize<RequiredStringKeys<T>>]: Capitalize<K> extends keyof T ? T[Capitalize<K>] : never;
} & {
	[K in Uncapitalize<OptionalStringKeys<T>>]?: Capitalize<K> extends keyof T ? T[Capitalize<K>] : never;
} & Omit<T, keyof T & string>;

export const uncapitalizeKeys = <T extends object>(object: T) =>
	setObjectKeys<T, UncapitalizeKeys<T>>(
		object,
		key =>
			`${key.slice(0, 1).toLowerCase()}${key.slice(1)}` as
				| Uncapitalize<RequiredStringKeys<T>>
				| Uncapitalize<OptionalStringKeys<T>>
	);

export type LowercaseKeys<T extends object> = {
	[K in Lowercase<RequiredStringKeys<T>>]: Uppercase<K> extends keyof T ? T[Uppercase<K>] : never;
} & {
	[K in Lowercase<OptionalStringKeys<T>>]?: Uppercase<K> extends keyof T ? T[Uppercase<K>] : never;
} & Omit<T, keyof T & string>;

export const lowercaseKeys = <T extends object>(object: T) =>
	setObjectKeys<T, LowercaseKeys<T>>(
		object,
		key => `${key.toLowerCase()}` as Lowercase<RequiredStringKeys<T>> | Lowercase<OptionalStringKeys<T>>
	);
