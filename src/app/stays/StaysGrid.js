'use client';

import { useState } from "react";
import rooms from "@/data/roomsData";
import { getImageById } from "@/services/galleryService";
import StayCard from "@/components/StayCard";

// const sortOptions = [
//     { label: "Default", value: "default" },
//     { label: "Price: Low to High", value: "asc" },
//     { label: "Price: High to Low", value: "desc" },
// ];

const StaysGrid = () => {
    const [sortOrder, setSortOrder] = useState("default");

    const sortedRooms = [...rooms].sort((a, b) => {
        if (sortOrder === "asc") return a.basicInfo.pricePerNight - b.basicInfo.pricePerNight;
        if (sortOrder === "desc") return b.basicInfo.pricePerNight - a.basicInfo.pricePerNight;
        return 0;
    });

    return (
        <>
            {/* <div className="flex justify-end mb-6">
                <Menu.Root>
                    <Menu.Trigger asChild>
                        <Button variant="outline" size="sm">
                            <HiSortAscending className="mr-2" />
                            Sort: {sortOptions.find(o => o.value === sortOrder)?.label}
                        </Button>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <Menu.Content>
                                {sortOptions.map((opt) => (
                                    <Menu.Item
                                        key={opt.value}
                                        value={opt.value}
                                        onSelect={() => setSortOrder(opt.value)}
                                    >
                                        {opt.label}
                                    </Menu.Item>
                                ))}
                            </Menu.Content>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedRooms.map((room) => {
                    const cover = getImageById(room.images?.[0]);

                    return (
                        <StayCard
                            key={room.id}
                            image={
                                cover?.variants?.small ??
                                "/images/image-not-found-small.webp"
                            }
                            blur={cover?.variants?.blur ?? ""}
                            title={room.name}
                            tagline={room.aboutStay.tagline}
                            description={room.aboutStay.description}
                            price={room.basicInfo.pricePerNight}
                            id={room.id}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default StaysGrid;