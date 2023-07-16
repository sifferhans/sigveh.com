export const serializers = new Map([
	[/\(\//g, '(https://sigveh.com/'],
	[/ ---? /g, ' — '],
	[/::SocialPost\{link=([^ ]*)[\s\S]*?::/g, '$1'],
	[/(\n|^)---\n[\s\S]*\n---\n/, '\n'],
])