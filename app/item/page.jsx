"use client";
import Layout from "../../components/Layout";
import RecomenededProducts from "../../components/RecommendedProducts";
import ShortDesc from "./components/ShortDesc";
import ProductGallery from "./components/ProductGallery";
import AddToCart from "./components/AddToCart";

export default function page() {
  return (
    <Layout criteria={false}>
      <div className="px-4 mx-auto xl:w-4/6 xl:-mt-14">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-12 mb-18">
          <ShortDesc />
          <ProductGallery />
          <AddToCart />
        </div>
        <div className="border-2 mt-7 rounded-2xl border-2xl border-slate-400 p-5 mb-25 mr-0 bg-white">
          <div className="font-fredoka text-3xl font-bold text-custom-purple mb-4">Description</div>
          <div className="text-custom-purple-lite font-thin">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, ut ut est convallis sed vitae. Felis
              sit in parturient vestibulum cras nisl vitae urna. Sit fermentum mauris, tincidunt at erat ullamcorper
              sagittis, turpis. Fermentum ac dignissim mi tellus phasellus. A vitae ac dignissim ultricies justo, quis.
              Scelerisque donec proin egestas neque, gravida pulvinar. Viverra a tristique urna lectus faucibus dui
              feugiat. Sit laoreet mi tempor hendrerit sed. Tincidunt turpis rhoncus nulla mattis malesuada. Ullamcorper
              sem turpis leo eu velit elementum pellentesque sapien. Enim odio ut consectetur enim cursus volutpat
              tempus. Nisl mauris, mauris, dignissim suscipit. Mauris adipiscing tempus, consectetur posuere velit.
              Ullamcorper a, ut gravida nisl parturient ac lacinia sed lectus. Dictum nulla adipiscing convallis blandit
              aenean convallis ullamcorper. Eget rhoncus nisi eu, nec et. Vel, aliquet ut volutpat ac fringilla. Fames
              in adipiscing nibh eleifend pellentesque volutpat interdum praesent maecenas. Ante tempor arcu tellus
              turpis. Sed faucibus nam viverra maecenas scelerisque eu enim. A, orci quis non vitae, tincidunt
            </p>
            <p className="mb-4">
              nisi eu, nec et. Vel, aliquet ut volutpat ac fringilla. Fames in adipiscing nibh eleifend pellentesque
              volutpat interdum praesent maecenas. Ante tempor arcu tellus turpis. Sed faucibus nam viverra maecenas
              scelerisque eu enim. A, orci quis non vitae, tincidunt
            </p>
            <p>
              Eget rhoncus nisi eu, nec et. Vel, aliquet ut volutpat ac fringilla. Fames in adipiscing nibh eleifend
              pellentesque volutpat interdum praesent maecenas. Ante tempor arcu tellus turpis. Sed faucibus nam viverra
              maecenas scelerisque eu enim. A, orci quis non vitae, tincidunt
            </p>
          </div>
        </div>
        <RecomenededProducts />
      </div>
    </Layout>
  );
}
