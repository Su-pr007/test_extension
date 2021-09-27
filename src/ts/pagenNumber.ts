import $ from 'jquery'

XMLHttpRequest.bind(window, ['readystatechange', 'load', 'loadend'], showPageNumber)

function showPageNumber () {

	const bitrixBodySelector: string = '#bx-admin-prefix'
	const pagenSelector: string = '.main-ui-pagination-pages-list'
	const activePageSelector: string = '.main-ui-pagination-active'

	const newElementId: string = 'bx-current-page-number'

	let bodyObject = $(bitrixBodySelector)
	const isPageBitrix: boolean = bodyObject.length >= 1

	if (isPageBitrix) {
		let pagenObject = $(pagenSelector)
		const pagesCount: string = pagenObject.find('> :last-child').html()

		if (pagesCount !== undefined) {

			const currentPageNumber: string = pagenObject.find(activePageSelector).html()

			let currentPageObject: HTMLElement = document.createElement('div')
			currentPageObject.id = newElementId
			currentPageObject.innerHTML = currentPageNumber
			currentPageObject.style.position = 'absolute'
			currentPageObject.style.top = '70px'
			currentPageObject.style.right = '100px'
			currentPageObject.style.fontSize = '2em'

			bodyObject.append(currentPageObject)


			return true
		}
	}

	return false
}
showPageNumber()
