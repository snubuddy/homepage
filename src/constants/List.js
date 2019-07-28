import lcJSON from './language_country.json'

export const _languages = lcJSON.language.map((value) => {
	return value.English
})

export const _countries = lcJSON.country.map((value) => {
	return value.name
})

export const _gender = [ 'male', 'female' ]

export const _gender_preference = [ 'both', 'male', 'female']

export const _language_option = ['beginner', 'intermediate', 'advanced', 'fluent']


