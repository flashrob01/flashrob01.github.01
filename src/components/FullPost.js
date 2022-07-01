import React, {useState } from 'react';
import moment from 'moment';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const FullPost = ({ post }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>

            <Button onClick={toggle} size='xs'>
                Read Full Post
            </Button>

            <Modal isOpen={modal} onClick={toggle} size='lg' className='post-modal'>
                <ModalHeader className='post-modal'>
{/*                     {post.title.rendered}
 */}                       {/*  <p className="text-muted">
                            {moment(post.modified).format("MMMM Do YYYY, h:mm:ss a")}
                        </p> */}
                </ModalHeader>
       {/*          <ModalBody 
                className='post-modal'
                dangerouslySetInnerHTML={{ __html: post.content.rendered}}>

                </ModalBody> */}

                <ModalFooter>
                    <Button  onClick={toggle} classNAme='secondary'>
                        close
                    </Button>

                </ModalFooter>

            </Modal>
        </div>
    )
}

export default FullPost;