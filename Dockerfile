FROM jupyter/scipy-notebook:hub-2.2.1

LABEL maintainer "Dario Malchiodi <malchiodi@di.unimi.it>"

USER root

# libav-tools for matplotlib anim
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
                    graphviz && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN wget https://github.com/ryanoasis/nerd-fonts/releases/download/v2.0.0/FiraCode.zip
RUN unzip FiraCode.zip -d /usr/local/share/fonts/
RUN fc-cache -fv
RUN rm FiraCode.zip


# Install Python 2 packages
RUN conda install -c conda-forge \
    'ipywidgets' \
    'bokeh' \
    'pyzmq' \
    'ipyvolume' \
    'python-graphviz' \
    && conda clean -tipsy

RUN conda install -c conda-forge jupyter_nbextensions_configurator
RUN conda install -c conda-forge jupyter_contrib_nbextensions

RUN jupyter nbextension enable hide_input/main

RUN python -m ipykernel install

# Install additional requirements (if not already installed)
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN rm requirements.txt

USER jovyan

#RUN rmdir /home/jovyan/work

RUN mkdir -p /home/jovyan/my-work

RUN mkdir -p /home/jovyan/data

RUN mkdir -p /home/jovyan/img

COPY content/L*ipynb /home/jovyan/

COPY content/data/* /home/jovyan/data/

COPY content/img/* /home/jovyan/img/

USER root

RUN chown jovyan /home/jovyan/L*ipynb
RUN chgrp users /home/jovyan/L*ipynb

RUN mkdir -p /home/jovyan/.jupyter/custom

ADD util/theme-superhero-datascience/custom.css /home/jovyan/.jupyter/custom/

USER jovyan
