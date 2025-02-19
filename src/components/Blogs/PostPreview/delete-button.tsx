'use client';

export default function DeleteButton({ slug }: { slug: string }) {
  return (
    <button
      className="text-white bg-red-500 hover:bg-red-600 font-medium text-sm px-3 py-2 text-center inline-flex items-center border-2 border-red-500"
      onClick={async () => {
        if (confirm('Are you sure you want to delete this blog?')) {
          await fetch('/api/blogs', {
            method: 'DELETE',
            body: JSON.stringify({ slug }),
          });
          window.location.reload();
        }
      }}
    >
      Delete blog
    </button>
  );
}
