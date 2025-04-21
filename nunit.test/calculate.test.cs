using NUnit.Framework;

namespace MathOperationsTests
{
    public class Calculator
    {
        public int Add(int a, int b)
        {
            return a + b;
        }

        public int Subtract(int a, int b)
        {
            return a - b;
        }
    }

    [TestFixture]
    public class CalculatorTests
    {
        private Calculator _calculator;

        [SetUp]
        public void Setup()
        {
            _calculator = new Calculator();
        }

        [Test]
        public void Add_ShouldReturnSum()
        {
            int a = 5;
            int b = 3;

            int result = _calculator.Add(a, b);

            Assert.That(result, Is.EqualTo(8));
        }

        [Test]
        public void Subtract_ShouldReturnDifference()
        {
            int a = 5;
            int b = 3;

            int result = _calculator.Subtract(a, b);

            Assert.That(result, Is.EqualTo(2));
        }
    }
}
