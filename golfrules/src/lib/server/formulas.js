// @ts-ignore
import mathjax from 'mathjax';

const MathJax = await mathjax.init({
	loader: { load: ['input/tex', 'output/svg'] }
});

/**
 * renders a single formula with MathJax
 * @param {string} formula
 * @returns {string}
 */
function render_formula(formula) {
	const svg = MathJax.tex2svg(formula, {
		display: false
	});
	return MathJax.startup.adaptor.innerHTML(svg);
}

const math_tag_regex = /&lt;math&gt;(.*?)&lt;\/math&gt;/g;

/**
 * renders all formulas in a HTML string with MathJax
 * @param {string} htmlContent
 * @returns {string}
 */
export function render_formulas(htmlContent) {
	const renderedHtml = htmlContent.replace(math_tag_regex, (_, formula) => {
		return render_formula(formula);
	});

	return renderedHtml;
}
