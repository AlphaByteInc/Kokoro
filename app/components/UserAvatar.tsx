'use client';

export function UserAvatar() {
  // TODO: Replace with actual user data
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return (
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 text-sm">?</span>
      </div>
    );
  }

  return (
    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
      <span className="text-pink-600 text-sm font-medium">S</span>
    </div>
  );
}