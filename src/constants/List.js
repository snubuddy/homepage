import lcJSON from './language_country.json'

export const _languages = lcJSON.language.map((value) => {
	return value.English
})

export const _countries = lcJSON.country.map((value) => {
	return value.name
})

export const _gender = [ 'male', 'female' ]

export const _gender_preference = [ 'both', 'male', 'female']

export const _language_level = ['beginner', 'intermediate', 'advanced', 'fluent']

export const _activity_category = ['교내', '학교 근처', '수도권', '수도권 외']

export const _activity_type = ['일반', '점심 모임', '언어 교환']
