//This is test suite
const selectors = require("../pageObjects/selector.json")
const values = require("../testdata/fieldvalues.json")
const baseUrl = "https://www.securian.com/insights-tools/retirement-calculator.html"

describe("retirement calculator tests", function () {
    it("fill in the require fileds and submit", async () => {
      await  browser.url(baseUrl)
        expect(browser).toHaveUrl("https://www.securian.com/insights-tools/retirement-calculator.html")

       
      await $$(selectors.inputBoxes.currentAge).setValues(values.currentAge)
      await $$(selectors.inputBoxes.retirement).setValues(values.retirement)
      await $$(selectors.inputBoxes.currentAnnualIncome).setValues(values.currentAnnualIncome)
      await $$(selectors.inputBoxes.spouseAnnualIncome).setValues(values.spouseAnnualIncome)
      await $$(selectors.inputBoxes.currentRetireSavings).setValues(values.currentRetireSavings)
      await $$(selectors.inputBoxes.currentRetireContribution).setValues(values.currentRetireContribut)
      await $$(selectors.inputBoxes.annualRetirementContributionIncrease).setValues(values.annualRetirementContributionIncrease)
      await $$(selectors.inputBoxes.additionalOtherIncome).setValues(values.additionalOtherIncome)
      await $$(selectors.inputBoxes.numberOfYearsRetirement).setValues(values.numberOfYearsRetirement)
      await $$(selectors.inputBoxes.postRetirementIncomeIncreaseWithInflation).click()
      await $$(selectors.inputBoxes.percentOfinFalAnnualIncomeDesired).setValues(values.percentOfinFalAnnualIncomeDesired)
      await $$(selectors.inputBoxes.preRetirementInvestmentReturn).setValues(values.preRetirementInvestmentReturn)
      await $$(selectors.inputBoxes.postRetirementInvestmentReturn).setValues(values.postRetirementInvestmentReturn)
      await $$(selectors.inputBoxes.saveButton).click()
      await $$(selectors.inputBoxes.calculatorButton).click()
      expect($$(selectors.results)).toBeDisplayed()
    });
    it("validate social sucurity section", async () => {
        await $$(selectors.inputBoxes.socialSecurityIncome).click()
        const elem = $$(selectors.inputBoxes.relatantipStatus)
        await expect(elem).toBeDisplayed()
        await elem.click()
        await $$(selectors.inputBoxes.socialSecurityOverride).setValues(values.socialSecurityOverride)
        await $$(selectors.inputBoxes.adjustDefaultValuesButton).click()

    });
});
