type ImageViewProps = {
	src: string;
};

function ImageView({ src }: ImageViewProps) {
	return (
		<main className="fixed inset-0 overflow-hidden bg-white">
			<img
				src={src}
				alt=""
				draggable={false}
				loading="eager"
				decoding="sync"
				className="block h-auto w-full object-contain object-center select-none"
			/>
		</main>
	);
}

export default ImageView;
