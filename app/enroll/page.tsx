
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link'
export default function enrollPage() {
    return (
        <main className='mt-5 lg:mx-[23rem]'>
            <h1 className='text-center my-7'>Enroll Form</h1>
            <div className='flex gap-6 justify-center' >
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="FULL NAME (EN) *" />
                        </div>
                        <TextInput className='w-96' id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="GENDER *" />
                        </div>
                        <TextInput id="password2" type="date" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="repeat-password" value="PLACE OF BIRTH *" />
                        </div>
                        <TextInput id="repeat-password" type='url' required shadow />
                    </div>
                </form>
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="PHONE NUMBER *" />
                        </div>
                        <TextInput className='w-96' id="email2" type="tel" addon="+855" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="UNIVERSITY *" />
                        </div>
                        <TextInput id="password2" type="password" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="repeat-password" value="DATE OF BIRTH *" />
                        </div>
                        <TextInput id="repeat-password" type="datetime-local" required shadow />
                    </div>
                </form>
            </div>
            <div className="py-10 ">
                <div >
                    <Label htmlFor="repeat-password" value="COURSES *" className="text-red-600" />
                </div>
                <TextInput id="repeat-password" type="id" placeholder="computer-scienice" required shadow />
                <p className="text-red-600 py-5" ><i className="fa-solid fa-share"></i> Please filter available courses to select the class..!</p>
            </div>
            <div className="flex mt-5 flex-wrap gap-2 justify-end">
                <Button color="failure">Cancel</Button>
                <Button color="blue">Enroll</Button>
            </div>

        </main>


    );
}
