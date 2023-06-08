const GOODS = [
	{
	  id: 1,
	  name: "Футболка",
	  price: 1500,
	  imgSrc:
		"image.png"
	},
	{
	  id: 2,
	  name: "Футболка",
	  price: 1500,
	  imgSrc:
		"image.png"
	},
	{
	  id: 3,
	  name: "Футболка",
	  price: 1500,
	  imgSrc:
		"goods/IMG_5539.png"
	},
	{
	  id: 4,
	  name: "Топ",
	  price: 1500,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_9834.PNG?exif_rotate=y&no_disposition=y&name=IMG_9834.PNG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJBSk1FY1JET1VQUkM5Snc5Wkh2eUF3PT0iLCJzaWRCYXNlNjQiOiIzSHBEY3JUNzF3SUs5Q25tUEFTdDZlczRsa3NjWmlueWIwNW1YZ1F4aVJ2WGhUK3pzelBSSHp2bTJOa3BVN050U21Ea0tqVzA5clRwSGY0YmxBeHlZeFJocHM3dEc5MDRBZnRUOHZqL2ozbDdEaDlBcGpFSVhRUzdRS1MreG5GTyIsImhtYWNCYXNlNjQiOiJQOUZRR1VFZjRUdXNHZE13cXNwaXd4TVlydjFzV0pQOG5wWGY1V281RXJZPSJ9"
	},
	{
	  id: 7,
	  name: "Футболка",
	  price: 1500,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_5581.PNG?exif_rotate=y&no_disposition=y&name=IMG_5581.PNG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJ4eXBhQTc3YU9leUxlT0E2MkNxTkFBPT0iLCJzaWRCYXNlNjQiOiJwN1RHbCtwWTZ3blFCTXRnTU1aS1p3dkJGd3NWQVExZWFITVdXMTdQSk1FTWpkZ01iMHRVbjJtTHphTXVuSkE0cVQwUHh0N2xkc2JxYmdPWFNYa1FpNjdwdmVhK0dVMUFkY3JjaGs2b1BDSStNVTRGR2FORXNobFNSRWtuazdzQTJuZElndU5mQ3REQng3bVpaY0p4aUE9PSIsImhtYWNCYXNlNjQiOiJpT2d5amsxbUQ2M0NleFRhRy82c3VROGZaVExSTWl6YitkekRWQXI1T1N3PSJ9"
	},
	{
	  id: 8,
	  name: "Футболка",
	  price: 2500,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_5591.PNG?exif_rotate=y&no_disposition=y&name=IMG_5591.PNG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJhUEszWkE2UnlmYjBuMDlrUjg2YnZ3PT0iLCJzaWRCYXNlNjQiOiJKSDRRY1RpaUVRelVaT0tuL0dYRHNvd2l0Y1dZOEJrejhraytrTEtDQVF3TzlIalFOOVlTak9TMGJWSlRKcG42YnVNVVh4dEZUSVZGTi82MXRxQytRWHpZQWRCYXRHcFpQNXZaVDFUaVdkMlV0Z2pkc1FHalFrWlVENTMvVHVRUks1azFWRGhiaS96cURSUngyQ0xwbnc9PSIsImhtYWNCYXNlNjQiOiJkRzlaaERQSElsQnRFalZHRFBFaWFDVjcxRzBGV0NnTVdVVDFWNml2aDVZPSJ9"
	},
	{
	  id: 9,
	  name: "Футболка",
	  price: 2500,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_5592.PNG?exif_rotate=y&no_disposition=y&name=IMG_5592.PNG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJTOVdkdG43SnY5T1Y2MWJzNksyZFhRPT0iLCJzaWRCYXNlNjQiOiJvMU8xbyt4QTBrVkJabGgzZVFyTk5YREQzZDRYLzlENE9wek9PUkNWMWxqeVNKZmFEZXZVWFJPWHpxNHA4RlpldVdiNktLS1M3UmhkUHhScGVRallCYTc0eTRIdkx3M00ramlRaWlydnB3bjZhaWM5c0hmVVhlelZMY2RRZGJtOU9yYVFSZWhoMVdHbzFwRWFuS3lYclE9PSIsImhtYWNCYXNlNjQiOiI1VDcvejczQ2d4U0dEODhSeUlnYVFiRTNBYzFpV0pqTDdRMFNCTVMvcGRZPSJ9"
	},
	{
	  id: 10,
	  name: "Футболка",
	  price: 2500,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_5589.PNG?exif_rotate=y&no_disposition=y&name=IMG_5589.PNG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiIvOHVYNkZBWFpKZmVUL1ZQYmZyLzBnPT0iLCJzaWRCYXNlNjQiOiI1eXEwbHFBUll2RmtsU1pQRXZ2Q0N1OWZ0bnRseWc3SElXM0RjcGZUbTE1NlYyS0xtVTBaalVsUWduM1c3WldQWlcrNWdHbW8rTnNKTmZBV294QVd2Z3N2VWhIbDRxWkVnYnZVcEFWS25SbnlSeG1zWXZPdlNKMUV6UHpIcmlEaXZrMzB2aVFyWVJJa0xWQkQwblJjeFE9PSIsImhtYWNCYXNlNjQiOiJoanRVeUhRczlYcmVMSW5xS2l5dGRrTG01Ly9aKytqYUQ1Z1JBNjRBb2h3PSJ9"
	},
	{
	  id: 11,
	  name: "Футболка",
	  price: 1800,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_5676.PNG?exif_rotate=y&no_disposition=y&name=IMG_5676.PNG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJXcjRnQUtsQXNWNjlXYWdkQnlkdWRnPT0iLCJzaWRCYXNlNjQiOiJycTdvbFJtR2Z4N1laeTNJeXlZSVpaRm1WbWNPd1JYaEU1US80MmllWlk5TzA0bXNsNzBPUjBTbnQwdXU4cVVJNjgrVXJGVmR0cml4TWgvdjZYSDVIUHVGbkpWdTVwVEttZUwrZE1RTWhNT1htUXdSU0lXUi84TkxFYXRtYzdkam1Rcm9FVkp2VSs4aWM0Y3R3M2pVTUE9PSIsImhtYWNCYXNlNjQiOiJ1cTJjNUxaZmFmbEJsVXh3QVREbTlQWjdRa0VjNXFkZmJVSkt2TU1rOGYwPSJ9"
	},
	{
	  id: 12,
	  name: "Футболка",
	  price: 1800,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_5677.PNG?exif_rotate=y&no_disposition=y&name=IMG_5677.PNG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJhNHFSY1ZXck9nMUNVZFFSaUM5QjBRPT0iLCJzaWRCYXNlNjQiOiJydFJFZzVPNHZYT0R1WFI3Um44dkl6dGlqME1aaDVzaU53S1pPdWFFMjhoM3NlZkw3R29WOFlPNndmNDJDcmhPQUhneWRKRHRZc1pENm43bjZxdXVNS3BrWXk4VUozNnhqUkhMc3pJNlNNS1hXZWVjQVBiQWxLdWkyb3FvWmNiTnpaOFlOTVNGTThsdy9Dak1rT1Q3YVE9PSIsImhtYWNCYXNlNjQiOiJ5QTY1OVM3RXd2L05pbzVYQWpNOFIrc3g2OUViblFmUmo4RkNJeE9JSmJzPSJ9"
	},
	{
	  id: 13,
	  name: "Футболка",
	  price: 2600,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_5681.PNG?exif_rotate=y&no_disposition=y&name=IMG_5681.PNG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJJc01PeUJ0MGpUcHN2VWFjUkZZRDFBPT0iLCJzaWRCYXNlNjQiOiJxMEIvem9jZTc1bitHVEZGeWNJRnhTNHBuY1F2aDBkUi9lOFJIai9kN2hGeEROS3NxZEZQYmxqUGNnNlNIeDRuTzdkL0ZhS00rd1NSRm9rQ0JiMytHZWxobE1Fb0VLejZUekhjeXpWbzJQQnUvWVFsWGxKUVNEZnlJYjd1bzRlaldMb3QrNk9QSEhkUjN4MXQzS0xpQkE9PSIsImhtYWNCYXNlNjQiOiJxb2k5a3RtMEsvVEt5c2EzK3NVMmVUaWF5Y2NWZXVLNWNiNXgvN1h1YlBzPSJ9"
	},
	{
	  id: 14,
	  name: "Футболка",
	  price: 2600,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_5680.PNG?exif_rotate=y&no_disposition=y&name=IMG_5680.PNG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJnYmpmck11dWNkRTEyRzhWUjZQa0ZBPT0iLCJzaWRCYXNlNjQiOiJ3VjlGOWxlamFXRG14K2RVMmtCWHoyc0l0WVE2QTNuMnJVTWZPak1yUEVrTElaRmRNc3F2VmpQUkpKN09menphL0lpVFJrdEN2UWFmQldHSWJNMEpCR1FETlYzZFVPQWdEc2xQWTlKNExKMWd5OWZZbWtueUdrVVJKM3BVSmJ6OCIsImhtYWNCYXNlNjQiOiI1VjgvUzhSMUplaitXOGxsQVF2YTFScTBtUExLbGMrTUdHVVMrTGVzNnAwPSJ9"
	},
	{
	  id: 17,
	  name: "Бомбер чёрный",
	  price: 3750,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_6089.JPG?exif_rotate=y&no_disposition=y&name=IMG_6089.JPG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJkcVRuMEhaR2JqNDhXQkQ1SE12RVhnPT0iLCJzaWRCYXNlNjQiOiJBa0REdXJPZDgrZWVyNjYvem9waVBaSUNHRU5kOWEzZC9nK1FYaWxnKzd3d2Mxb2xQUXhrOHUzc05mc1hoRjhOaUtjcVN2RVZYZ0ZSR1BWQ3A0Qit5MjQraHE0TkZLYXNvMHE4ZmZIK0ZWbDl1dE5CVGswQ3Nwb2xCZUlxVzZ4NCIsImhtYWNCYXNlNjQiOiJhanJXNUNTMGVyaC8yWVVOWmZqM1Rsa2pmNGhYbTN2dnZWcHN2Wm9BQkZvPSJ9"
	},
	{
	  id: 18,
	  name: "Бомбер светлый",
	  price: 3750,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_6090.JPG?exif_rotate=y&no_disposition=y&name=IMG_6090.JPG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJxaEdHMm1KZUN1MHF3dUppUUtEYmFRPT0iLCJzaWRCYXNlNjQiOiJCSkJsRHdkODFFcUFwVkE5OC9EMGRYZ0xNdEZqSEpzZkRQNjNDZ20xY1BBVGNOQkUwbm9ocUJzZHJXcnVrUHMrZ2tUclZTMTZyUlJURy9POFhVSWFjc2VUYVJiN28wbm8yVWxBT2JKMDJqWTI3OTUvejlrT3pZMjZxdDd5bFJGNCIsImhtYWNCYXNlNjQiOiJIUEEvNUM3NG9KbEFwRmYyanpRTjdPUUtORTFaSThhSCt4dFVVQ3ZnZEl3PSJ9"
	},
	{
	  id: 19,
	  name: "Толстовка",
	  price: 1700,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_5665.PNG?exif_rotate=y&no_disposition=y&name=IMG_5665.PNG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJvaWpidkFrOFFlQzN2blFkUWVDMkF3PT0iLCJzaWRCYXNlNjQiOiJ0VGNlcmlrOEk1WFJGbWZiSG8rYUZZditYY21XbzRlVVVTNko5WEZMSGxLNHlkU1d6dG02NTRXZE5FKzkvMHd2UXJBOUdMelp6ZSsrVDJ1WGxVdUxHR0ExV1BLUmtTSUdhL0lMRUx2eHdGdmhxSUpVSjh0YVQxaGt5eU1Bdk5mUTBKc21mYnMrbUptZzVFSVoyd0phVHc9PSIsImhtYWNCYXNlNjQiOiJMbWNhUFNFODlkRzlMajN3bTFxRnZDdXhmeUQxOU84STRXQ1JrbFZ3cURjPSJ9"
	},
	{
	  id: 20,
	  name: "Брюки спортивные",
	  price: 2600,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_6091.JPG?exif_rotate=y&no_disposition=y&name=IMG_6091.JPG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJTWTZ6NzR1UHdWRUVwb3B5cGt6SGhRPT0iLCJzaWRCYXNlNjQiOiJPU3FjU3NuMDF5U2N0dnB4U050anZDMjFRNjhzSHVZQWg2L1Q5SmRyamVwRU5ZN3VFN0E3NjFBa1NOZ2NiaXMzNEVHVDVnNXFFR3VtOE1HNlE1RXh1bVk5ek9HY21HTTFDOUI4T1lUUnBzTWgvZGUvb3U1eEFsQnJRUGdIbVFNZiIsImhtYWNCYXNlNjQiOiI1T1QvaFJ0MmdYZGk1bVZ5VjN2V2JVKzk5ZG9kZVdxcmdFaExGQlV3MndNPSJ9"
	},
	{
	  id: 21,
	  name: "Толстовка на замке",
	  price: 1600,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_6092.JPG?exif_rotate=y&no_disposition=y&name=IMG_6092.JPG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJ1NW5OSWxXeHVGVnViOG9DNHBRUDZnPT0iLCJzaWRCYXNlNjQiOiJPM1BXMFlJNG96WFhYTWYxZm5Ibmh5cEhGTWEvZk5tMWRrQVhOMGtmTWduMnRHaHk4MnVVKzBSYVpXS01kbkllUkJwaGgvb1g2cG1rZHRZZVh2ZnE2M3hYZGZlVkVzMXRTSk5tQTJld1kxZFQ3clMxYVlsNUZER21Gc3FBT2I5dCIsImhtYWNCYXNlNjQiOiJQQzE2dkZtMU82Y1N5NzBNd0RDN2l1UStwYi94Y0JyQkpJcjdpWmRWMGdBPSJ9"
	},
	{
	  id: 22,
	  name: "Костюм спортивный (Футболка+Шорты)",
	  price: 3700,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_6093.JPG?exif_rotate=y&no_disposition=y&name=IMG_6093.JPG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiI1TzhLQzUzZk1LQjQ5OFllekdLS1lBPT0iLCJzaWRCYXNlNjQiOiJid25odHhDczg2K2ZVbXY4WGh6ejFaUWxSSmJBN2N3WVUzL1ZJbWpUM1Fzckl3U1VBNVplaTNMRWUwRSthcjNySGhhcHovRU1HSzBXb2IvdStSQ0VvY1JrMm56ZTErSHNmc0ZCZnNlTmF0L1RqMUNPMFovdEVidXJLUjI0MTlZZEZyVGtFYjFpMWY4bEp1MnU3U2pBdnc9PSIsImhtYWNCYXNlNjQiOiJMdUlLdmFKa3pOUmdXN1puaXpmOWxmZW9FK1NVTGx3NU92anhMVHRDRGFzPSJ9"
	},
	{
	  id: 23,
	  name: "Костюм спортивный (Толстовка+Штаны)",
	  price: 3700,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_6094.JPG?exif_rotate=y&no_disposition=y&name=IMG_6094.JPG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJWWHVPQ0NKemZpK2k2YmhpR05yZFBnPT0iLCJzaWRCYXNlNjQiOiJSMjFZYmV3QUQ3QmRxRWNFMDQ5ZllrYy9xbkUxNDlsbnBGMHlybTk4NEUvREFJTzVhVW5PWkxzVmxuY09wV2ZSMmd2R0I4eG5KaFFtTGRnbVlSNS96Tkk5S1ZZUmJPTHNyTFhRd0lxTDR3M3JkcnVUT0N2R1g3R2tWbWcwN09qMiIsImhtYWNCYXNlNjQiOiIzL0FuQWxaNTd1VUxLd1NTcW5lWVRHQllTNjFTQ2lCVWFJZFBnQldCdVpRPSJ9"
	},
	{
	  id: 24,
	  name: "Толстовка",
	  price: 1000,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_6096.JPG?exif_rotate=y&no_disposition=y&name=IMG_6096.JPG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJsNFZYMDdPb1lLSlMwczFwTXcranB3PT0iLCJzaWRCYXNlNjQiOiI5aVVOL1VscWJPLzdnYUs3SEE0UXQ1MHltUVVlNCt5bU5uYXV6eEtrYWZyUWthWUtuWGZQai93Z1VWaXZHa1FKNWZFRU9PTE1EY3IyVGlPVUlzcTVOSmpTYnNyTTFuYlZUOHUyZU5Iak4zT2tkQlhLaHN3NmtHTG9KeDBDd3RQciIsImhtYWNCYXNlNjQiOiIyQ2RQd1h0bEJqUWxDVkJkNEtNakZSTWFpRUZsOGhTNmtueU01RkR1VExVPSJ9"
	},
	{
	  id: 25,
	  name: "Комплект 2 спортивных костюма ",
	  price: 4800,
	  imgSrc:
		"https://webattach.mail.yandex.net/message_part_real/IMG_6095.JPG?exif_rotate=y&no_disposition=y&name=IMG_6095.JPG&sid=YWVzX3NpZDp7ImFlc0tleUlkIjoiMTc4IiwiaG1hY0tleUlkIjoiMTc4IiwiaXZCYXNlNjQiOiJBTi9RY2h2akZyU0pMTnNzSmZqaHFBPT0iLCJzaWRCYXNlNjQiOiIrWENmaTAzM3JweVp3SGl5OWxpN1F2WWcva1VDQVczbDRrMXdZc281S21qM3hhNVBJckFIVC9lcWdWamJBVFNjNml2WFJPMWRnMFZYUTJzNTlqaU9OVHJTdVJWNlJheDlrSy9MRnJGeXZSZEF1YTNubFk4U3lCOEd3bXRVWEFrayIsImhtYWNCYXNlNjQiOiJieHY4clhrN1dXTTR6a2pBYnFHam5HdE5EYW9kZnRFdHVxdlVGUE1kTXhFPSJ9"
	},
	{
	  id: 6,
	  //name: 'Доктор Ливси',
	  //price: 666,
	  imgSrc: "goods/doctor livesey.png"
	}
  ];