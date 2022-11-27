import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitle from "../../../../component/ITitle/ITitle";
import ICard from "../../../../component/ICard/ICard";
import ProdukController from "./ProdukController";

const ProdukView = () => {
	const controller = ProdukController();
	return (
		<div className={`flex-1 grid gap-5`}>
			<IBreadcrumbs title={"Produk"} subtitle={"produk"} />
			<div className={`bg-white rounded-lg p-5 grid gap-5`}>
				<ITitle title={"Produk"} />
				<div className={`grid gap-5 tablet:grid-cols-2 laptop:grid-cols-3`}>
					{controller.listMenuProduk.map((data, index) => {
						return (
							<ICard
								key={index}
								title={data.title}
								icon={data.icon}
								path={data.link}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default ProdukView;
