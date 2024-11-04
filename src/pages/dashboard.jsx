import MainLayout from "../components/Layout/MainLayout";
import Card from "../components/Elements/Card";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
       {/* top content start*/}
       <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card 
        title="Total Balance"
        desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis suscipit suscipit. Maecenas semper risus leo, vitae vehicula risus congue vitae. Sed semper sem est, in malesuada tellus placerat ac. Quisque auctor lobortis erat, eget fringilla velit cursus vel. In hac habitasse platea dictumst. Duis et velit turpis. Mauris nec orci eu orci interdum laoreet sed eget velit. Proin ultricies augue eu nibh porta cursus. Donec cursus nisi eu urna interdum, in porttitor arcu posuere. Quisque pretium dui quis lorem ultrices aliquet. Vivamus vitae venenatis ante. Vestibulum est risus, sollicitudin eget nulla eu, egestas iaculis nibh. Morbi aliquam nulla nec nibh tincidunt sollicitudin. "
        />
        <Card 
        title="Goals"
        desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis suscipit suscipit. Maecenas semper risus leo, vitae vehicula risus congue vitae. Sed semper sem est, in malesuada tellus placerat ac. Quisque auctor lobortis erat, eget fringilla velit cursus vel. In hac habitasse platea dictumst. Duis et velit turpis. Mauris nec orci eu orci interdum laoreet sed eget velit. Proin ultricies augue eu nibh porta cursus. Donec cursus nisi eu urna interdum, in porttitor arcu posuere. Quisque pretium dui quis lorem ultrices aliquet. Vivamus vitae venenatis ante. Vestibulum est risus, sollicitudin eget nulla eu, egestas iaculis nibh. Morbi aliquam nulla nec nibh tincidunt sollicitudin. "
        />
        <Card 
        title="Upcoming Bill" 
        desc ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis suscipit suscipit. Maecenas semper risus leo, vitae vehicula risus congue vitae. Sed semper sem est, in malesuada tellus placerat ac. Quisque auctor lobortis erat, eget fringilla velit cursus vel. In hac habitasse platea dictumst. Duis et velit turpis. Mauris nec orci eu orci interdum laoreet sed eget velit. Proin ultricies augue eu nibh porta cursus. Donec cursus nisi eu urna interdum, in porttitor arcu posuere. Quisque pretium dui quis lorem ultrices aliquet. Vivamus vitae venenatis ante. Vestibulum est risus, sollicitudin eget nulla eu, egestas iaculis nibh. Morbi aliquam nulla nec nibh tincidunt sollicitudin. "
        /> 
        <div className="md:col-span-1">
          <Card 
          title="Recent Transaction" 
          desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis suscipit suscipit. Maecenas semper risus leo, vitae vehicula risus congue vitae. Sed semper sem est, in malesuada tellus placerat ac. Quisque auctor lobortis erat, eget fringilla velit cursus vel. In hac habitasse platea dictumst. Duis et velit turpis. Mauris nec orci eu orci interdum laoreet sed eget velit. Proin ultricies augue eu nibh porta cursus. Donec cursus nisi eu urna interdum, in porttitor arcu posuere. Quisque pretium dui quis lorem ultrices aliquet. Vivamus vitae venenatis ante. Vestibulum est risus, sollicitudin eget nulla eu, egestas iaculis nibh. Morbi aliquam nulla nec nibh tincidunt sollicitudin. "
          />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card 
          title="Statistics" 
          desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis suscipit suscipit. Maecenas semper risus leo, vitae vehicula risus congue vitae. Sed semper sem est, in malesuada tellus placerat ac. Quisque auctor lobortis erat, eget fringilla velit cursus vel. In hac habitasse platea dictumst. Duis et velit turpis. Mauris nec orci eu orci interdum laoreet sed eget velit. Proin ultricies augue eu nibh porta cursus. Donec cursus nisi eu urna interdum, in porttitor arcu posuere. Quisque pretium dui quis lorem ultrices aliquet. Vivamus vitae venenatis ante. Vestibulum est risus, sollicitudin eget nulla eu, egestas iaculis nibh. Morbi aliquam nulla nec nibh tincidunt sollicitudin. "
          />
          <Card 
          title="Expenses Breakdown" 
          desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis suscipit suscipit. Maecenas semper risus leo, vitae vehicula risus congue vitae. Sed semper sem est, in malesuada tellus placerat ac. Quisque auctor lobortis erat, eget fringilla velit cursus vel. In hac habitasse platea dictumst. Duis et velit turpis. Mauris nec orci eu orci interdum laoreet sed eget velit. Proin ultricies augue eu nibh porta cursus. Donec cursus nisi eu urna interdum, in porttitor arcu posuere. Quisque pretium dui quis lorem ultrices aliquet. Vivamus vitae venenatis ante. Vestibulum est risus, sollicitudin eget nulla eu, egestas iaculis nibh. Morbi aliquam nulla nec nibh tincidunt sollicitudin. "
          />
        </div>
      </div>
  {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;