export default function Button({ children, onClick, className }) {
      return (
            <button
                  onClick={onClick}
                  className={`bg-main text-lightAccent py-2 px-4 rounded-lg ${className}`}
            >
                  {children}
            </button>
      )
}