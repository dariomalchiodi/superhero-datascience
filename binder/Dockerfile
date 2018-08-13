FROM jupyter/scipy-notebook


#############
# ADD FONTS #
#############

USER root

RUN apt-get install nano

RUN wget https://github.com/ryanoasis/nerd-fonts/releases/download/v2.0.0/FiraCode.zip
RUN unzip FiraCode.zip -d /usr/local/share/fonts/
RUN fc-cache -fv
RUN rm FiraCode.zip

##################
# CONDA PACKAGES #
##################
RUN conda update conda && conda install -c conda-forge --yes \
 'nodejs<10' \
 pip \
 ipyvolume

RUN pip install --upgrade paretochart

USER $NB_UID

RUN mkdir -p util/theme-superhero-datascience
COPY theme-superhero-datascience/* util/theme-superhero-datascience/

RUN git clone https://github.com/jupyterlab/jupyterlab.git

WORKDIR /home/jovyan/jupyterlab

RUN pip install -e . && \
    jlpm install && \
    cp ../util/theme-superhero-datascience/create-theme.js buildutils/lib && \
    jlpm run create:theme

WORKDIR /home/jovyan

#USER root
#RUN chown -R jovyan jupyterlab/theme-superhero-datascience

USER jovyan

WORKDIR /home/jovyan/jupyterlab/theme-superhero-datascience

RUN cp ../../util/theme-superhero-datascience/tsconfig.json . && \
    cp ../../util/theme-superhero-datascience/variables.css style/ && \
    npm install && \
    npm run build && \
    jupyter labextension install .

EXPOSE 8888
ENTRYPOINT ["jupyter", "lab", "--ip=0.0.0.0"]

