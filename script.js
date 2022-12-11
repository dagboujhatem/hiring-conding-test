
const text = "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[6] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (listen); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist,[7] widely acknowledged to be one of the greatest and most influential physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics. Relativity and quantum mechanics are the two pillars of modern physics.[3][8] His mass–energy equivalence formula E = mc2, which arises from relativity theory, has been dubbed the world's most famous equation.[9] His work"
const wordCount = text.split(' ').reduce((a, c) => { return ((a[c] = (a[c] || 0) + 1), a); }, {})
console.log("================= Word count using MapReduce =================")
console.log(wordCount)

const scores = Object.values(wordCount)
const maxCount = Math.max(...scores)
const minCount = Math.min(...scores)
const total = scores.reduce((a, b) => { return a + b; }, 0)
console.log("================= Find the total of score, max and min score =================")
console.log({ total, minCount, maxCount })

const result = Object.keys(wordCount).map(k => {
    const percent =  ((100 * wordCount[k])/total)
    const score =  Math.abs(((percent * 2)/100) - 2)
    const item = {}
    item[k]= score
    return item
})
console.log("================= Show result =================")
console.log(result)
