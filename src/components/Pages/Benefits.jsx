import { Clock, DollarSign, RotateCw } from "lucide-react"
import Bannerd from "../mini/Bannerd"
import Image from "next/image"

export default function BenefitsSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block">
            <Bannerd title="Benefits" />
          </div>

          <h2 className="text-black font-lexend text-[50px] font-thin leading-[62px] capitalize">
            Unleashing The Benefits Of{" "}
            <span className="text-black font-lexend text-[50px] font-medium leading-[62px] capitalize">
              Knowledge, 
              Growth, And Success!
            </span>
          </h2>

          <div className="space-y-4">
            <div className="bg-[#2A5C6B] text-white p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <RotateCw className="w-5 h-5" />
                <h3 className="font-medium">Up-To-Date Content</h3>
              </div>
              <p className="text-gray-200 text-sm">
                Lorem ipsum dolor sit amet consectetur. Montes risus cras ullamcorper dolor amet proin aliquam orci.
                Adipiscing aliquam nunc interdum faucibu
              </p>
            </div>

            <div className="border rounded-full p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="font-medium">Tracking And Analytics</span>
              </div>
            </div>

            <div className="border rounded-full p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-gray-600" />
                <span className="font-medium">Cost-Efficiency</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/benefits.png"
            alt="Person attending a video conference call"
            width={600}
            height={600}
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </section>
  )
}

