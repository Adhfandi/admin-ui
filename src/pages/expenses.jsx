import MainLayout from "../components/Layouts/MainLayout";
import CardExpenses from "../components/Elements/CardExpenses";
import CardExpensesB from "../components/Elements/CardExpensesB";

const ExpensesPage = () => {
    return (
        <MainLayout type="expenses">
        <h1 className="text-gray-500 text-2xl mb-4">Expenses Comparison</h1>
          {/* top content start*/}
          <div className="mb-8 sm:flex sm:gap-6">
              <CardExpenses />
            </div>                                      
          {/* top content end*/}
          <h1 className="text-gray-500 text-2xl mb-4">Expenses Breakdown</h1>
          {/* bottom content start*/}
          <div className="mb-8 sm:flex sm:gap-6">
            <div className="sm:w-1/3">
            <CardExpensesB/>  
            </div>
            <div className="sm:w-1/3">
              <CardExpenses />
            </div>
            <div className="sm:w-1/3">
              <CardExpensesB />
            </div>
          </div>
            <div className="mb-8 sm:flex sm:gap-6">
              <div className="sm:w-1/3">
                <CardExpensesB />
              </div>
              <div className="sm:w-1/3">
                <CardExpensesB />
              </div>
              <div className="sm:w-1/3">
                <CardExpenses />
              </div>
            </div>
    
          {/* bottom content end*/}
        </MainLayout>
      );
    };
export default ExpensesPage