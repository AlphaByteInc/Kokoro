export function generateStaticParams() {
  // Generate params for all possible post IDs
  // Include all post IDs that are referenced in the application
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '123' }, // Add this ID since it's referenced in profile page replies
  ];
}