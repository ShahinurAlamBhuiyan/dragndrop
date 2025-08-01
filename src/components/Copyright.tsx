
export const Copyright = () => {
    return (
        <p className="text-white text-sm font-semibold mt-20">
            © {new Date().getFullYear()} Drag n Drop. Built by{' '}
            <a
                href="https://github.com/ShahinurAlamBhuiyan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400 transition-colors"
            >
                Shahinur Alam Bhuiyan
            </a>
            . All rights reserved.
        </p>
    )
}